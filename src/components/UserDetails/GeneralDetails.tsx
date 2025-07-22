import './UserDetails.scss';
import type { UserDetails } from '../../types/users';

type Props = {
  currentUser: UserDetails;
};

export default function GeneralDetails({ currentUser }: Props) {
  const sections = [
    {
      title: 'Personal Information',
      items: [
        { label: 'Full Name', value: currentUser.fullName },
        { label: 'Phone Number', value: `+234${String(currentUser.phoneNumber)}` },
        { label: 'Email Address', value: currentUser.email },
        { label: 'BVN', value: currentUser.bvn },
        { label: 'Gender', value: currentUser.gender },
        { label: 'Marital Status', value: currentUser.maritalStatus },
        { label: 'Children', value: currentUser.children },
        { label: 'Type of Residence', value: currentUser.residence },
      ],
    },
    {
      title: 'Education and Employment',
      items: [
        { label: 'Level of Education', value: currentUser.levelOfEducation },
        { label: 'Employment Status', value: currentUser.employmentStatus },
        { label: 'Sector of Employment', value: currentUser.sectorOfEmployment },
        { label: 'Duration of Employment', value: currentUser.durationOfEmployment },
        { label: 'Office Email', value: currentUser.email },
        { label: 'Monthly Income', value: currentUser.monthlyIncome },
        {
          label: 'Loan Repayment',
          value:
            typeof currentUser.loanRepayment === 'number'
              ? `₦${currentUser.loanRepayment.toLocaleString()}`
              : 'N/A',
        },
      ],
    },
  ];

  return (
    <div className="general-details">
      {sections.map((section, i) => (
        <div className={`section ${i === sections.length - 1 ? 'last' : ''}`} key={section.title}>
          <h3>{section.title}</h3>
          <div className="info-grid">
            {section.items.map((item, idx) => (
              <div className="info-box" key={idx}>
                <p className="label">{item.label}</p>
                <p className="value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
