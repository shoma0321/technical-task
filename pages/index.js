// pages/index.js
import { useState } from 'react';
import Layout from '../components/Layout';
import CompanyTable from '../components/companyTable';
import SearchForm from '../components/SearchForm';
import SortOptions from '../components/SortOptions';

export default function Home() {
  const [companies, setCompanies] = useState([]);

  const handleSearch = (companies) => {
    setCompanies(companies);
  };

  const handleSort = (sortedCompanies) => {
    setCompanies(sortedCompanies);
  };

  return (
    <Layout title="ホーム">
      <div className="w-full flex justify-center mb-4 mt-4 flex-wrap">
        <SearchForm onSearch={handleSearch} />
        <div className="w-1/4 mt-4">
          <SortOptions companies={companies} onSort={handleSort} />
        </div>
      </div>
      <div className="w-full">
        <CompanyTable companies={companies} />
      </div>
    </Layout>
  );
}