// usePageTitle.js
import { useEffect } from 'react';

const usePageTitle = (title) => {

  useEffect(() => {
    document.title = title; // Set the document title
  }, [title]);
};

export default usePageTitle;