import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'; 
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

// function AuthorQuiz() {
//   return (
//     <div> Author Quiz </div>
//   );
// }

function Hero(){
  return (<div className="row">
<div className="jumbotron col-10 offset-1">

<h1> Author Quiz</h1>
<p>Select the book written by the author shown</p>
</div>

  </div>);
}

function Turn({author,books, highlight, onAnswerSelected}) {

function highlightToBgColor(highlight){
  const mapping={
    'none':'',
    'correct':'green',
    'wrong': 'red'
  };

  return mapping[highlight];
}

  return (
  
  <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>

  <div className="col-4 offset-1">
    <img src={author.imageUrl} className="authorimage" alt="author" />
    </div>

    <div  className="col-6">
      {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}/> )}
  </div>
  </div>
  );
}

Turn.propTypes ={
author:PropTypes.shape({
  name:PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.string).isRequired
}),
books: PropTypes.arrayOf(PropTypes.string).isRequired,
onAnswerSelected: PropTypes.func.isRequired,
highlight: PropTypes.string.isRequired


};

function Book({title,onClick}) {
  return (<div className="answer" onClick= {()=> {onClick(title);}}>
    <h4> {title} </h4>
  </div>);
}

function Continue({show,onContinue}) {
  return (
    <div className="row continue">
      {
        show?
        <div className="col-11">
          <button className="btn btn-primary btn-lg float-right" value="Continue"/>   
    </div>
    :null} 
    </div>
  );
}

function Footer(){
  return (<div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">
        All Images are from somewhere.
      </p>
    </div>

  </div>
  )
}

function AuthorQuiz ({turnData,highlight,onAnswerSelected,onContinue}){
 
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
        <Continue show={highlight=== 'correct'} onContinue={onContinue}/>
        <p> <Link to="/add"> Add an Author</Link> </p>
        <Footer/>

      </div>
    );
  
}

export default AuthorQuiz;
