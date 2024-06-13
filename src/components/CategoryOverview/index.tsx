import Link from 'next/link';
import React from 'react'

interface Props{
    title: string;
    header: string;
    description: string;
    link: string;
    buttonText: string
}

const CategoryOverview = ({title, header, description, link, buttonText}: Props) => {
  return (
    <div>
        <div>
            <button>{title}</button>
        </div>

        <div>
            <p>{header}</p>
            <p>{description}</p>
            <Link href={link}>
                <button>{buttonText}</button>
            </Link>
        </div>
    </div>
  )
}

export default CategoryOverview