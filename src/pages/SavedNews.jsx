const SavedNews = (props) => {
  return (
    <article
      key={props.keys}
      className="bg-white dark:bg-slate-500 dark:border-0 dark:text-white shadow border-2 border-gray-200 ml-6 p-6 flex flex-col justify-start rounded-lg"
    >
      <h5 className="text-gray-900 dark:text-white text-md xl:text-xl font-medium mb-2">
        <a
          href={props.href}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title}
        </a>
      </h5>
    </article>
  );
};

export default SavedNews;
