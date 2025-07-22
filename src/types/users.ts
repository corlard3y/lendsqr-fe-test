
export type User = {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
};

export type Guarantor = {
  fullName: string;
  phone: number;
  email: string;
  relationship: string;
};

export type UserDetails = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: number;
  bvn: number;
  gender: 'Male' | 'Female' | string;
  maritalStatus: 'Single' | 'Married' | string;
  children: number | string;
  residence: string;
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  monthlyIncome: string;
  loanRepayment: number | null;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantor1: Guarantor;
  guarantor2: Guarantor;
  profileImage: string;
  tier: number;
  accountBalance: string;
  accountNumber: number;
  bankName: string;
  status: 'active' | 'blacklisted' | 'pending' | string;
  dateJoined: string;
};
