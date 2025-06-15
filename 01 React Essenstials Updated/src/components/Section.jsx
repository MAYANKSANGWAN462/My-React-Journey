// export default function Section({title,id,children}){
//     return (
//         <section id={id}> //OR IN TEH SAME WAY WE CAN PASS FOR THE CLASSNAME ETC...
//             <h2>{title}</h2>
//             {children}
//         </section>
//     );
// }


// OR

// export default function Section({title,...props,children}){ /////ERROR WRONG POISTION OF THE ...props
export default function Section({title,children,...props}){
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}