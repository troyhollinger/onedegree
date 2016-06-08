<?php


class VideoController extends BaseController {

		 /*************************************************
		 ## Function getvideos
		 ## Get Vidoes from \Video
		 ## Add Item for Youtube thumb
		 ##
		 ##
		 ************************************************/
		
		 public function getvideos(){
		    	
	    	try {

					$videos = Video::all();

				} catch (Exception $e) {

					return Response::json(['message' => 'Sorry, videos could not be retrived'], 404);
					
				}

			if($videos){

				foreach ($videos as $key=>$video) {
					$link = explode('/', $video['link']);
					$youtube_id = end($link);
					$videos[$key]['youtube_id'] = $youtube_id;

					
				}
			}	
			return Response::json(['data' => $videos], 200);;	

						
		 }
		
		// End of getvideos

}