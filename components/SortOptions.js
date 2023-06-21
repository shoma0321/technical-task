// components/SortOptions.js
import { useState } from 'react';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

export default function SortOptions({ companies, onSort }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);

    const sortedCompanies = [...companies].sort((a, b) => {
      const aValue = parseFloat(a[selectedOption.value]);
      const bValue = parseFloat(b[selectedOption.value]);

      if (!isNaN(aValue) && !isNaN(bValue)) {
        return bValue - aValue;
      } else {
        return 0;
      }
    });

    onSort(sortedCompanies);
  };

  const options = [
    { value: 'sales_2022', label: '2022年 売上' },
    { value: 'profit_2022', label: '2022年 利益' },
    { value: 'sales_2021', label: '2021年 売上' },
    { value: 'profit_2021', label: '2021年 利益' },
    { value: 'sales_2020', label: '2020年 売上' },
    { value: 'profit_2020', label: '2020年 利益' }
  ];

  return (
    <div className="w-full mb-4">
      <Select 
        options={options} 
        value={selectedOption} 
        onChange={handleChange}
        placeholder="並び替え"
      />
    </div>
  );
}