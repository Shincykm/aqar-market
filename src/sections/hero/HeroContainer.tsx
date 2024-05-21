
const HeroContainer = ({children} :any) => {
  return (
    <>
        <div className={`overflow-hidden`}>
            {children}
        </div>
    </>
  )
}

export default HeroContainer