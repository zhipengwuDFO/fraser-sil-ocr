import React from 'react'

type Props = {
    
    className?: string;

}

const SecondPage = (props: Props) => {

    const { className } = props;
  return (
    <div
    className={`${className} `}
    >SecondP
        
        age</div>
  )
}

export default SecondPage;