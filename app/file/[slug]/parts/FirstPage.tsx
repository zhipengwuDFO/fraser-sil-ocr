import React ,{useContext} from 'react'
import SectionOne from './FirstPage/SectionOne';
import SectionTwo from './FirstPage/SectionTwo';
import SectionThree from './FirstPage/SectionThree';
import { JsonDataContext } from "@/app/store/jsonData-context";

type Props = {

    className?: string;
 

}

const FirstPage = (props: Props) => {
  const { className } = props;
  const ctx = useContext(JsonDataContext);
  let data = ctx.jsonData;



  return (
    <div className={`${className} flex flex-col `}>
        <SectionOne />

        <div className='grid grid-cols-12 flex-grow '>
            <SectionTwo className='col-span-9 ' />
            <SectionThree className='col-span-3' />
        </div>

    </div>
  )
}

export default FirstPage