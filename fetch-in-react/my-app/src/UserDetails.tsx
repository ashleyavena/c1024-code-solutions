/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import type { User } from './Users';

type Props = {
  userId: number;
  onCancel: () => void;
};
export function UserDetails({ userId, onCancel }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = (await response.json()) as User;
        setUser(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    setIsLoading(true); // each time we click, it wont reset to show Loading... bc we did finally false so we have to do it manually
    fetchData();
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error || !user) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}