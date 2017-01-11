<?php


class PDFController extends BaseController {

	 public function QMR(){
		 	$file= public_path(). "/QMR_Q4_2016_Landscape.pdf";

		    $headers = array(
			  'Content-Type' => 'application/pdf',
			);

			$filename = 'QMR_Q4_2016_Landscape.pdf';
			

			return Response::make(file_get_contents($file), 200, [
			    'Content-Type' => 'application/pdf',
			    'Content-Disposition' => 'inline; filename="'.$filename.'"'
			]);

		 }
	
}