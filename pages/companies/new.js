// pages/companies/new.js
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import CompanyForm from '../../components/CompanyForm';

export default function NewCompany() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/');
  };

  return (
    <Layout title="新規作成">
      <CompanyForm onSuccess={handleSuccess} />
    </Layout>
  );
}
