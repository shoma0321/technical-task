// components/SearchForm.js
import { useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

const Select = dynamic(() => import('react-select'), { ssr: false });

export default function SearchForm({ onSearch }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState([]);
  const [sales, setSales] = useState('');
  const [profit, setProfit] = useState('');

  const prefectures = ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'].map(prefecture => ({value: prefecture, label: prefecture}));

  const handleSubmit = async event => {
    event.preventDefault();

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/companies`, {
      params: { name, address: location.map(l => l.value), sales, profit}
    });

    onSearch(response.data);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-between flex-wrap items-end">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="企業名" className="border-2 border-gray-300 m-2 p-2 flex-1" />
      <Select options={prefectures} isMulti value={location} onChange={setLocation} placeholder="所在地" className="border-2 border-gray-300 m-2 flex-1"/>
      <input type="text" value={sales} onChange={(e) => setSales(e.target.value)} placeholder="売上下限" className="border-2 border-gray-300 m-2 p-2 flex-1" />
      <input type="text" value={profit} onChange={(e) => setProfit(e.target.value)} placeholder="利益下限" className="border-2 border-gray-300 m-2 p-2 flex-1" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">検索</button>
    </form>
  );
}

