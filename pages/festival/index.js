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
const FestivalPage = ({ festivalHome }) => {

  if (festivalHome && festivalHome.data) {
    return (
      <>
				<section>
					<SliceZone {...festivalHome.data} resolver={resolver} />
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
						color: rgb(4,39,20);
						background-color: transparent;
					}
				`}</style>
      </>
    );
  }

  return null;
};

export async function getStaticProps() {

  const festivalHome = await Client().getSingle("festival-page") || {}

  return {
    props: {
      festivalHome,
    }
  }
}

export default FestivalPage;
