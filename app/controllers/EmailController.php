<?php


class EmailController extends BaseController {

	public function speaker() {

		try {
			
			$form = Input::all();

			Mail::send('emails.speaker', array('form' => $form), function($message) {

			    $message->to('austenpayan@gmail.com', 'Austen Payan')->subject('Speaker Request');

			});

		} catch (Exception $e) {
			
			Log::error($e);

			return Response::json(['message' => 'Something went wront'], 404);

		}

		return Response::json(['message' => 'Email Sent!'], 200);


	}


	public function inquiry() {

		try {
			
			$form = Input::all();

			Mail::send('emails.inquiry', array('form' => $form), function($message) {

			    $message->to('austenpayan@gmail.com', 'Austen Payan')->subject('Inquiry');

			});

		} catch (Exception $e) {
			
			Log::error($e);

			return Response::json(['message' => 'Something went wront'], 404);

		}

		return Response::json(['message' => 'Email Sent!'], 200);

	}

}