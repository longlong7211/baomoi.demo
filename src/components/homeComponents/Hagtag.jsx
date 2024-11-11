export default function Hagtag({ title }) {
  return (
    <div className="ms-2" style={{ border: '1px solid #fff', borderRadius: 4, color: '#fff', fontSize: 12, height: 20, padding: '0px 2px' }}>
      # {title}
    </div>
  )
}