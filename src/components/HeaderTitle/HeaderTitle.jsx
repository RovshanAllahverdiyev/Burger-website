

const HeaderTitle = ({ title, subTitle}) => {
  return (
    <div className="text-center mb-20 ">
        <p data-aos='fade-up' className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{subTitle}</p>

        <h1 data-aos='fade-up' data-aos-delay='200' className="text-3xl font-bold">{title}</h1>
    </div>
  )
}

export default HeaderTitle