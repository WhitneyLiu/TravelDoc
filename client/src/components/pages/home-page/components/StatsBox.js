const stats = [
    { name: 'Action Required', stat: '15' },
    { name: 'Completed', stat: '120' },
    { name: 'Expiring', stat: '5' },
  ];
  
  export default function StatBox() {
    return (
      <div>
        <dl className="mt-5 grid grid-cols-1 gap-40 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-lg bg-indigo-700 px-4 py-5 shadow sm:p-6 flex flex-col items-start">
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-white text-left">{item.stat}</dd>
              <dt className="truncate text-sm font-medium text-white text-left">{item.name}</dt>
            </div>
          ))}
        </dl>
      </div>
    );
  }