// components/CompanyForm.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; 


export default function CompanyForm({ company, onSuccess }) {
  const router = useRouter();
  const [code, setCode] = useState(company ? company.code : '');
  const [name, setName] = useState(company ? company.name : '');
  const [status, setStatus] = useState(company ? company.status : '');
  const [nameKana, setNameKana] = useState(company ? company.name_kana : '');
  const [postalCode, setPostalCode] = useState(company ? company.postal_code : '');
  const [address, setAddress] = useState(company ? company.address : '');
  const [representativeName, setRepresentativeName] = useState(company ? company.representative_name : '');
  const [representativeNameKana, setRepresentativeNameKana] = useState(company ? company.representative_name_kana : '');
  const [phoneNumber, setPhoneNumber] = useState(company ? company.phone_number : '');
  const [profit2022, setProfit2022] = useState(company ? company.profit_2022 : '');
  const [profit2021, setProfit2021] = useState(company ? company.profit_2021 : '');
  const [profit2020, setProfit2020] = useState(company ? company.profit_2020 : '');
  const [sales2022, setSales2022] = useState(company ? company.sales_2022 : '');
  const [sales2021, setSales2021] = useState(company ? company.sales_2021 : '');
  const [sales2020, setSales2020] = useState(company ? company.sales_2020 : '');
  const [memo, setMemo] = useState(company ? company.memo : '');

  const handleSubmit = async event => {
    event.preventDefault();

    // メモ欄以外の全ての項目が記入されているかを確認
    if (!code || !name || !status || !nameKana || !postalCode || !address || !representativeName || !representativeNameKana || !phoneNumber || !profit2022 || !profit2021 || !profit2020 || !sales2022 || !sales2021 || !sales2020) {
        alert("全ての項目を記入してください（メモ欄以外）。");
        return;
        }

    const response = company
      ? await axios.put(`http://localhost:3001/api/companies/${company.id}`, { code, name, status, nameKana, postalCode, address, representativeName, representativeNameKana, phoneNumber,profit2022, profit2021, profit2020, sales2022, sales2021, sales2020, memo })
      : await axios.post('http://localhost:3001/api/companies', { code, name, status, nameKana, postalCode, address, representativeName, representativeNameKana, phoneNumber,profit2022, profit2021, profit2020, sales2022, sales2021, sales2020, memo });

    onSuccess(response.data);

    // 更新が成功したら、元の企業データページにリダイレクトします。
    if (response.data && company) {
        router.push(`/companies/${company.id}`);
    }
  };

  const handleDelete = async () => {
    if (confirm('このデータを削除してもよろしいですか？')) {
      await axios.delete(`http://localhost:3001/api/companies/${company.id}`);
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block mt-4 font-bold">
        企業コード
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="企業コード" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        企業名
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="企業名" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        企業名(カナ)
        <input type="text" value={nameKana} onChange={(e) => setNameKana(e.target.value)} placeholder="企業名(カナ)" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        上場状況
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="上場状況" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        郵便番号
        <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="郵便番号" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        所在地
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="所在地" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        代表者名
        <input type="text" value={representativeName} onChange={(e) => setRepresentativeName(e.target.value)} placeholder="代表者名" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        代表者名(カナ)
        <input type="text" value={representativeNameKana} onChange={(e) => setRepresentativeNameKana(e.target.value)} placeholder="代表者名(カナ)" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        電話番号
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="電話番号" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        2022年利益
        <input type="text" value={profit2022} onChange={(e) => setProfit2022(e.target.value)} placeholder="2022年利益" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        2021年利益
        <input type="text" value={profit2021} onChange={(e) => setProfit2021(e.target.value)} placeholder="2021年利益" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        2020年利益
        <input type="text" value={profit2020} onChange={(e) => setProfit2020(e.target.value)} placeholder="2020年利益" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        2022年売上
        <input type="text" value={sales2022} onChange={(e) => setSales2022(e.target.value)} placeholder="2022年売上" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        2021年売上
        <input type="text" value={sales2021} onChange={(e) => setSales2021(e.target.value)} placeholder="2021年売上" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        2020年売上
        <input type="text" value={sales2020} onChange={(e) => setSales2020(e.target.value)} placeholder="2020年売上" className="border p-2 w-full" />
      </label>
      <label className="block mt-4 font-bold">
        メモ
        <textarea value={memo} onChange={(e) => setMemo(e.target.value)} placeholder="メモ" className="border p-2 w-full h-32" />
      </label>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {company ? '更新' : '新規作成'}
      </button>
      {company && (
        <button type="button" onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-4 rounded">
          削除
        </button>
      )}
    </form>
  );
}