import Link from "next/link" 

export default function Home() {
  let name = 'Park'
  return (
    <div>
      <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/list">List</Link>
      </div>
     <h3 className="title">Apple Fresh</h3>
     <p style={{ color:"white", textAlign:'center', fontSize:13 }}>by dev {name}</p>
    </div>
  )
}