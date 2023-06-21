// pages/companies/[id]/edit.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../../components/Layout';
import CompanyForm from '../../../components/CompanyForm';

export default function EditCompany() {
  const router = useRouter();
  const { id } = router.query;

  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      console.log(`Fetching company with id: ${id}`); 
      const response = await axios.get(`http://localhost:3001/api/companies/${id}`);
      setCompany(response.data);
    };

    if (id) {
      fetchCompany();
    }
  }, [id]);

  const handleSuccess = () => {
    router.push('/');
  };

  return (
    <Layout title="編集">
      {company && <CompanyForm company={company} onSuccess={handleSuccess} />}
    </Layout>
  );
}
