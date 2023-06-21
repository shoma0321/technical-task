// components/CompanyTable.js
import Link from 'next/link';

export default function CompanyTable({ companies }) {
  if (companies.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>検索結果がありません</p>
      </div>
    );
  }

  return (
    <div>
      {companies.map((company) => (
        <div key={company.id} className="border p-4 mb-4">
          <Link href={`/companies/${company.id}`}>
            <a target="_blank" rel="noopener noreferrer" className="font-bold text-lg mb-2 hover:underline">{company.name}</a>
          </Link>
          <div className="mb-2">所在地：{company.address}</div>
          <div>
            <div className="font-bold mb-1">財務情報：</div>
            <ul className="mb-2">
              <li>2022年 売上：{company.sales_2022}, 利益：{company.profit_2022}, 利益率：{company.profit_rate_2022}</li>
              <li>2021年 売上：{company.sales_2021}, 利益：{company.profit_2021}, 利益率：{company.profit_rate_2021}</li>
              <li>2020年 売上：{company.sales_2020}, 利益：{company.profit_2020}, 利益率：{company.profit_rate_2020}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
