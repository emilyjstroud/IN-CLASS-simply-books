import React, { useState, useEffect } from 'react';
import AuthorCard from '../components/AuthorCard';
import { getAuthors } from '../api/authorData';
import { useAuth } from '../utils/context/authContext';

function AuthorsPage() {
  const [authors, setAuthors] = useState([]);

  const { user } = useAuth;

  // const getAllAuthors = () => {
  //   getAuthors(user.uid).then(setAuthors);
  // };

  useEffect(() => {
    getAuthors(user.uid).then(setAuthors);
  }, [user.uid]);

  // export default function Authors() {
  return (
    <div>
      <AuthorCard />
      {
        authors.map((author) => <AuthorCard key={author.firebaseKey} authorObj={author} />)
      }
      authors
    </div>
  );
}

export default AuthorsPage;
