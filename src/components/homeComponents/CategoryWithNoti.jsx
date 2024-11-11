export default function CategoryWithNoti({ title, notiNumber = 0 }) {
  return <div style={{ color: "#fff", fontSize: 16, padding: '12px 15px' }} className="position-realtive">
    {title}
    {notiNumber !== 0 ? <div className="position-absolute" style={{ width: 20, height: 20, background: 'red', borderRadius: 10, textAlign: 'center', marginLeft: 25, marginTop: - 37 }}>{notiNumber}</div> : ""
    }</div >
}