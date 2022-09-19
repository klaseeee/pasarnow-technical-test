const ResultItem = ({ result }) => {
  return (
    <li className="flex flex-col overflow-hidden border-b-2 border-gray-100 dark:border-b-2 dark:border-slate-700 pb-4">
      <h6 className="text-xs md:text-sm">{result?.cite?.domain}</h6>
      <a
        href={result.link}
        className="text-lg md:text-2xl hover:underline visited:text-purple-600 font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {result.title}
      </a>
      <p className="truncate">{result.description}</p>
    </li>
  );
};

export default ResultItem;
