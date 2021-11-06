import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import "./Settings.css"
import {useState} from "react";
const Settings = () => {

    const [numFilters, setNumFilters] = useState([]);

    const handleAddFilter = (el) => {

        setNumFilters([...numFilters, 100]);

    }

    const handleAdditions = () => {
        let jsx;
            // map through the extra filters we want to add to produce jsx
            jsx = numFilters.map((item, index)=>{
                return (<Container fluid id={`filter-${index+1}`} key={index+1}><Row style={{paddingLeft:'8px'}}>
                    <label for="cars"><b>Filter</b></label>
                </Row>

                <Row style={{paddingLeft:'20px', width: '50%'}}>
                        <select name="filters" id="filters" style={{height:'30px'}}>
                            <option value="title-includes-the-words">Title includes the words</option>
                            <option value="recently-added">Recently added</option>
                            <option value="recently-changed">Recently Changed</option>
                            <option value="created-by">Created By</option>
                            <option value="modified-by">Modified By</option>
                            <option value="page-properties">Page Properties</option>
                        </select>
                </Row>

                <Row style={{paddingLeft:'20px', width: '50%', marginTop:'0px'}}>
                    <input placeholder="Enter search words"/>
                </Row>

                <Row style={{paddingLeft:'20px', width: '15%', marginTop:'0px',}}>
                    <button 
                        className="add-filter" 
                        style={{textAlign:'left'}}
                        onClick={handleAddFilter}
                    >
                    <svg marginRight="0px" width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.883 3.007 12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z" fill="#2980B9"/></svg><span className="add-filter-text">Add Filter</span></button>
                </Row></Container>
                )
            });
        return jsx;
    }

    return (
        <Container fluid>
        <h1>Settings</h1>

        <p>Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last.</p>
        
        <Container fluid key={0} id="filter-0">
        <Row style={{paddingLeft:'8px'}}>
                    <label for="cars"><b>Filter</b></label>
                </Row>

                <Row style={{paddingLeft:'20px', width: '50%'}}>
                            <select name="cars" id="cars" style={{height:'30px'}}>
                            <option value="title-includes-the-words">Title includes the words</option>
                            <option value="recently-added">Recently added</option>
                            <option value="recently-changed">Recently Changed</option>
                            <option value="created-by">Created By</option>
                            <option value="modified-by">Modified By</option>
                            <option value="page-properties">Page Properties</option>
                        </select>
                </Row>

                <Row style={{paddingLeft:'20px', width: '50%', marginTop:'0px'}}>
                    <input placeholder="Enter search words"/>
                </Row>

                <Row style={{paddingLeft:'20px', width: '15%', marginTop:'0px',}}>
                    <button 
                        className="add-filter" 
                        style={{textAlign:'left'}}
                        onClick={handleAddFilter}
                    >
                    <svg marginRight="0px" width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.883 3.007 12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z" fill="#2980B9"/></svg><span className="add-filter-text">Add Filter</span></button>
                </Row>

                </Container>

                {handleAdditions()}
        </Container>  
    );
}   

export default Settings;