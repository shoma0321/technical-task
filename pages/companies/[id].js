import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function CompanyDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [company, setCompany] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/companies/${id}`)
        .then(response => {
          setCompany(response.data);
        });
    }
  }, [id]);

  if (!company) return <div>Loading...</div>;

  return (
    <Layout title={company.name}>
      <div className="content_el2 p-4">
        <h1 className="text-2xl font-bold mb-4">企業データ</h1>
        <hr className="mb-4"></hr>
        <h2 className="relative text-xl mb-4">{company.name}
          <Link href={`/companies/${company.id}/edit`}>
            <a className="absolute right-0 top-0 text-blue-500 hover:underline">編集</a>
          </Link>
        </h2>
        <table className="detail_kigyou_data w-full text-left border-collapse border border-gray-300">
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              <h3 className="text-gray-400 font-normal">企業コード</h3>
            </th>
            <td className="border border-gray-300 px-4 py-2">{company.code}</td>
            <th className="border border-gray-300 px-4 py-2">
              <h3 className="text-gray-400 font-normal">企業名(カナ)</h3>
            </th>
            <td className="border border-gray-300 px-4 py-2">{company.name_kana}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              <h3 className="text-gray-400 font-normal">電話番号</h3>
            </th>
            <td className="border border-gray-300 px-4 py-2">{company.phone_number}</td>
            <th className="border border-gray-300 px-4 py-2">
              <h3 className="text-gray-400 font-normal">上場状況</h3>
            </th>
            <td className="border border-gray-300 px-4 py-2">{company.status}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              <h3 className="text-gray-400 font-normal">郵便番号</h3>
            </th>
            <td className="border border-gray-300 px-4 py-2">{company.postal_code}</td>
            <th className="border border-gray-300 px-4 py-2">
              <h3 className="text-gray-400 font-normal">所在地</h3>
            </th>
            <td className="border border-gray-300 px-4 py-2">{company.address}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              <h3 className="text-gray-400 font-normal">代表者名</h3>
            </th>
            <td className="border border-gray-300 px-4 py-2">{company.representative_name}</td>
            <th className="border border-gray-300 px-4 py-2">
              <h3 className="text-gray-400 font-normal">代表者名(カナ)</h3>
            </th>
            <td className="border border-gray-300 px-4 py-2">{company.representative_name_kana}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              <h3 className="text-gray-400 font-normal">メモ欄</h3>
            </th>
            <td className="border border-gray-300 px-4 py-2">{company.memo}</td>
          </tr>
        </table>
      </div>
    </Layout>
  );
}
