export type VisaType = 'F-1' | 'H-1B' | 'Refugee';

export interface Bank {
  name: string;
  features: string[];
  eligibility: string;
  icon: string;
}

export interface BankOptions {
  [key: string]: Bank[];
}

export interface Alert {
  title: string;
  message: string;
  date: string;
  icon: string;
  priority: 'high' | 'medium' | 'low';
}

export interface AlertsData {
  critical: Alert[];
  regular: Alert[];
}

export interface TransferService {
  name: string;
  fee: string;
  speed: string;
  rating: string;
  icon: string;
  costEffective: boolean;
  safest: boolean;
  description: string;
}

export interface TaxInfo {
  form: string;
  status: string;
  deadline: string;
  requirements: string[];
  tips: string[];
}

export interface UserData {
  name?: string;
  age?: string;
  dob?: string;
  visaType?: VisaType;
  status?: string;
  ssnStatus?: string;
  experience?: string;
}

export interface SafeSpendingResult {
  currentUtilization: string;
  safeSpending: number;
  maxSafeBalance: number;
  status: string;
  statusColor: string;
}

export interface CostCalculation {
  fee: string;
  total: string;
}

