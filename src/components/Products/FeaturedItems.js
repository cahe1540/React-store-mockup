import React , { useState, useEffect }  from 'react'
import {Card} from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

export const FeaturedItems = ({ featured }) => {
    //references to start and end of dispaly panel for slider
    const[startEnd, setWindowIndex] = useState([1,4]);
    useEffect(() => {
    }, [startEnd]);
    
    const slideRight = () => {
        let start = startEnd[0];
        let end = startEnd[1];
        if(end < featured.length){
            start++;
            end++;
            setWindowIndex([start, end]);
        }
    }
    const slideLeft = () => {
        let start = startEnd[0];
        let end = startEnd[1];
        if(start > 1){
            start--;
            end--;
            setWindowIndex([start, end]);
        }
    }

    return (
        <section className= "featured-section container">
            <h2>Featured Items</h2>
            <FontAwesomeIcon className = "scrollFeatureLeft" icon = {faChevronCircleLeft} onClick = {slideLeft}/>
            <FontAwesomeIcon className = "scrollFeatureRight" icon = {faChevronCircleRight} onClick = {slideRight}/>
            <div className = "featuredItems">
                {featured.map((item, index) => {
                        if(index+1 >= startEnd[0] && index+1 <= startEnd[1])
                            return (<Card key = {item.id} item = {item}/>)
                        else return null;
                    })
                }
            </div>
        </section>
    )
}
