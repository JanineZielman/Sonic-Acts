import React from "react";
import SliceZone from "next-slicezone";
import resolver from "../../sm-resolver";
import Prismic from '@prismicio/client'
import { RichText } from "prismic-reactjs";

// Project components & functions
import { Client } from "../../utils/prismicHelpers";

/**
 * Homepage component
 */
const FestivalPage = ({ festivalHome2 }) => {

  if (festivalHome2 && festivalHome2.data) {
    return (
      <>
				<section className="festival2">
					<SliceZone {...festivalHome2.data} resolver={resolver} />
					<SliceZone {...festivalHome2.data} resolver={resolver} />
					<SliceZone {...festivalHome2.data} resolver={resolver} />
				</section>
				<style jsx>{`
					section{
						position: fixed;
						top: 0;
						left: 0;
						width: 100vw;
						height: 100vh;
						overflow: hidden;
						overflow-y: scroll;
						background-color: #dfdfdf;
					}
				`}</style>
      </>
    );
  }

  return null;
};

export async function getStaticProps() {

  const festivalHome2 = await Client().getSingle("festival-page") || {}

  return {
    props: {
      festivalHome2,
    }
  }
}

export default FestivalPage;
