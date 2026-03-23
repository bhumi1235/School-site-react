import { Link } from 'react-router-dom';

export default function PageHeader({ title, breadcrumb }) {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>{breadcrumb || title}</span>
      </div>
    </div>
  );
}
