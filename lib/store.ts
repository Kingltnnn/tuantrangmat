import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ExpenseCategory = 'Di chuyển' | 'Khách sạn' | 'Ăn uống' | 'Vui chơi' | 'Mua sắm' | 'Khác';
export type Payer = 'Nam' | 'An';

export interface Expense {
  id: string;
  amount: number;
  category: ExpenseCategory;
  payer: Payer;
  note: string;
  date: string;
}

export interface AppState {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, 'id' | 'date'>) => void;
  removeExpense: (id: string) => void;
  completedEvents: string[];
  markEventCompleted: (id: string) => void;
  clearData: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      expenses: [],
      addExpense: (expense) =>
        set((state) => ({
          expenses: [
            ...state.expenses,
            {
              ...expense,
              id: crypto.randomUUID(),
              date: new Date().toISOString(),
            },
          ],
        })),
      removeExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((e) => e.id !== id),
        })),
      completedEvents: [],
      markEventCompleted: (id) =>
        set((state) => ({
          completedEvents: state.completedEvents.includes(id)
            ? state.completedEvents
            : [...state.completedEvents, id],
        })),
      clearData: () => set({ expenses: [], completedEvents: [] }),
    }),
    {
      name: 'honeymoon-storage',
    }
  )
);
