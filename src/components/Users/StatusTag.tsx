import './Users.scss';

export const StatusTag = ({ status }: { status: string }) => {
  return <span className={`status-tag ${status.toLowerCase()}`}>{status}</span>;
};
