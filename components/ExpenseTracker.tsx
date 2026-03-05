'use client';

import { useState, useMemo } from 'react';
import { useAppStore, ExpenseCategory, Payer } from '@/lib/store';
import { Plus, Trash2, Filter, DollarSign, Coffee, Car, Home, ShoppingBag, Music, MoreHorizontal } from 'lucide-react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

const CATEGORIES: { value: ExpenseCategory; icon: any; color: string }[] = [
  { value: 'Di chuyển', icon: Car, color: 'text-blue-500 bg-blue-50' },
  { value: 'Khách sạn', icon: Home, color: 'text-indigo-500 bg-indigo-50' },
  { value: 'Ăn uống', icon: Coffee, color: 'text-orange-500 bg-orange-50' },
  { value: 'Vui chơi', icon: Music, color: 'text-purple-500 bg-purple-50' },
  { value: 'Mua sắm', icon: ShoppingBag, color: 'text-pink-500 bg-pink-50' },
  { value: 'Khác', icon: MoreHorizontal, color: 'text-slate-500 bg-slate-50' },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

export default function ExpenseTracker() {
  const { expenses, addExpense, removeExpense } = useAppStore();
  const [isAdding, setIsAdding] = useState(false);
  const [filterPayer, setFilterPayer] = useState<Payer | 'All'>('All');
  const [filterCategory, setFilterCategory] = useState<ExpenseCategory | 'All'>('All');

  // Form state
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<ExpenseCategory>('Ăn uống');
  const [payer, setPayer] = useState<Payer>('Nam');
  const [note, setNote] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || isNaN(Number(amount))) return;
    
    addExpense({
      amount: Number(amount),
      category,
      payer,
      note,
    });
    
    setAmount('');
    setNote('');
    setIsAdding(false);
  };

  const filteredExpenses = useMemo(() => {
    return expenses
      .filter(e => filterPayer === 'All' || e.payer === filterPayer)
      .filter(e => filterCategory === 'All' || e.category === filterCategory)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [expenses, filterPayer, filterCategory]);

  const summary = useMemo(() => {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    const namPaid = expenses.filter(e => e.payer === 'Nam').reduce((sum, e) => sum + e.amount, 0);
    const anPaid = expenses.filter(e => e.payer === 'An').reduce((sum, e) => sum + e.amount, 0);
    
    return { total, namPaid, anPaid };
  }, [expenses]);


  return (
    <div className="pb-24 pt-6 px-4 max-w-md mx-auto">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-rose-600 mb-1">Chi tiêu</h1>
          <p className="text-slate-500 text-sm">Quản lý ngân sách trăng mật</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-rose-500 text-white p-3 rounded-full shadow-lg shadow-rose-200 active:scale-95 transition-transform"
        >
          <Plus className={`w-6 h-6 transition-transform ${isAdding ? 'rotate-45' : ''}`} />
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="col-span-2 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-5 text-white shadow-md">
          <p className="text-rose-100 text-sm font-medium mb-1">Tổng chi tiêu</p>
          <h2 className="text-3xl font-bold tracking-tight">{formatCurrency(summary.total)}</h2>
        </div>
        
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <p className="text-slate-500 text-xs font-medium mb-1">Nam đã chi</p>
          <p className="text-lg font-bold text-slate-800">{formatCurrency(summary.namPaid)}</p>
        </div>
        
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <p className="text-slate-500 text-xs font-medium mb-1">An đã chi</p>
          <p className="text-lg font-bold text-slate-800">{formatCurrency(summary.anPaid)}</p>
        </div>
      </div>

      {/* Add Expense Form */}
      {isAdding && (
        <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 mb-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <h3 className="font-semibold text-slate-800 mb-4">Thêm khoản chi mới</h3>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Số tiền (VNĐ)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="number"
                  required
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="block w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl focus:ring-rose-500 focus:border-rose-500 sm:text-sm bg-slate-50"
                  placeholder="Ví dụ: 500000"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Danh mục</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as ExpenseCategory)}
                  className="block w-full pl-3 pr-8 py-2 border border-slate-200 rounded-xl focus:ring-rose-500 focus:border-rose-500 sm:text-sm bg-slate-50"
                >
                  {CATEGORIES.map(c => (
                    <option key={c.value} value={c.value}>{c.value}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Người chi</label>
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setPayer('Nam')}
                    className={`flex-1 py-1 text-sm font-medium rounded-lg transition-colors ${payer === 'Nam' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'}`}
                  >
                    Nam
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayer('An')}
                    className={`flex-1 py-1 text-sm font-medium rounded-lg transition-colors ${payer === 'An' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'}`}
                  >
                    An
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Ghi chú</label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="block w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-rose-500 focus:border-rose-500 sm:text-sm bg-slate-50"
                placeholder="Mua vé tham quan..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              Lưu khoản chi
            </button>
          </form>
        </div>
      )}

      {/* Filters */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex items-center bg-slate-100 rounded-full px-3 py-1.5 shrink-0">
          <Filter className="w-4 h-4 text-slate-500 mr-2" />
          <span className="text-xs font-medium text-slate-600">Lọc:</span>
        </div>
        
        <select 
          value={filterPayer}
          onChange={(e) => setFilterPayer(e.target.value as any)}
          className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1.5 font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-rose-500 shrink-0"
        >
          <option value="All">Tất cả người chi</option>
          <option value="Nam">Nam chi</option>
          <option value="An">An chi</option>
        </select>
        
        <select 
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value as any)}
          className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1.5 font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-rose-500 shrink-0"
        >
          <option value="All">Tất cả danh mục</option>
          {CATEGORIES.map(c => (
            <option key={c.value} value={c.value}>{c.value}</option>
          ))}
        </select>
      </div>

      {/* Expense List */}
      <div className="space-y-3">
        {filteredExpenses.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-2xl border border-slate-100 border-dashed">
            <p className="text-slate-500 text-sm">Chưa có khoản chi nào</p>
          </div>
        ) : (
          filteredExpenses.map((expense) => {
            const catInfo = CATEGORIES.find(c => c.value === expense.category) || CATEGORIES[5];
            const Icon = catInfo.icon;
            
            return (
              <div key={expense.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 group">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${catInfo.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-slate-800 truncate pr-2">{expense.category}</h4>
                    <span className="font-bold text-slate-900 shrink-0">{formatCurrency(expense.amount)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span className="truncate pr-2">{expense.note || 'Không có ghi chú'}</span>
                    <span className="shrink-0">{format(new Date(expense.date), 'dd/MM HH:mm')}</span>
                  </div>
                  
                  <div className="mt-2 flex items-center justify-between">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${expense.payer === 'Nam' ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`}>
                      {expense.payer} chi
                    </span>
                    
                    <button 
                      onClick={() => removeExpense(expense.id)}
                      className="text-slate-300 hover:text-red-500 transition-colors"
                      aria-label="Xóa"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
