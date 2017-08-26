import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div className="row">
      <div className="col-sm-7">
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
      </div>
    </div>
)

export default Header
