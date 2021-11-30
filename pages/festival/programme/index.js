import React, { useState } from 'react';
import SliceZone from "next-slicezone";
import resolver from "../../../sm-resolver.js";
import Prismic from '@prismicio/client'
import { RichText } from "prismic-reactjs";

// Project components & functions
import { Client } from "../../../utils/prismicHelpers";
import ProgrammeList from "../../../components/Festival/ProgrammeList";


const FestivalProgramme = ({ programme, posts}) => {
  if (programme && programme.data) {
    return (
			<section className="festival-programme">
				<div className="layer-1"><RichText render={programme.data.title} /></div>
				<div className="layer-2"><RichText render={programme.data.title} /></div>
				
				<div className="container">
					<div className="intro">
						<RichText render={programme.data.text} />
					</div>
					<ProgrammeList posts={posts}/>
				</div>
			</section>
    );
  }
  return null;
};

export async function getStaticProps() {
  const programme = await Client().getSingle("festival-programme") || {}
	const postsQueryOptions = { orderings: "[my.festival-programme-item.date]"}
  const posts = await Client().query(
		Prismic.Predicates.at("document.type", "festival-programme-item"), 
		postsQueryOptions
	)
	console.log(posts)
	// const series = await Client().query(Prismic.Predicates.at('my.festival-programme-item.series.seriesItem', 'Exhibition'), postsQueryOptions)


  return {
    props: {
      programme,
			posts: posts ? posts.results : [],
    }
  }
}

export default FestivalProgramme;
