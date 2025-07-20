import './UserDetails.scss';

const sections = [
  {
    title: 'Personal Information',
    items: [
      { label: 'Full Name', value: 'Grace Effiom' },
      { label: 'Phone Number', value: '07060780922' },
      { label: 'Email Address', value: 'grace@gmail.com' },
      { label: 'BVN', value: '07060780922' },
      { label: 'Gender', value: 'Female' },
      { label: 'Marital Status', value: 'Single' },
      { label: 'Children', value: 'None' },
      { label: 'Type of Residence', value: "Parent's Apartment" },
    ]
  },
  {
    title: 'Education and Employment',
    items: [
      { label: 'Level of Education', value: 'B.Sc' },
      { label: 'Employment Status', value: 'Employed' },
      { label: 'Sector of Employment', value: 'FinTech' },
      { label: 'Duration of Employment', value: '2 years' },
      { label: 'Office Email', value: 'grace@lendsqr.com' },
      { label: 'Monthly Income', value: '₦200,000.00 - ₦400,000.00' },
      { label: 'Loan Repayment', value: '40,000' }
    ]
  }
];

export default function GeneralDetails() {
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
