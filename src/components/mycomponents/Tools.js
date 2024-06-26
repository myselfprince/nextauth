import Link from "next/link";


const Tools = (props) => {
    const IconComponent  = props.iconName
    const icon_class = props.iconClass;
  return (
    <div> 
        <Link href={props.link} >
            <div className="flex justify-start items-center my-2 lg:w-[24vw] ">
                    {/* <IconComponent  className={icon_class} /> */}
                    <IconComponent  className="text-5xl mr-5 md:mr-3 text-[#65A30D]" />
                <div className="w-full h-full">
                    <h3>{props.title}</h3>
                    <p className="text-[13px]">{props.para}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Tools