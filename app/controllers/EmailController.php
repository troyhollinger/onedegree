<?php


class EmailController extends BaseController {

	public function speaker() {

		try {
			
			$form = Input::all();

			if (App::environment('local')) {

				Mail::send('emails.speaker', array('form' => $form), function($message) {

				    $message->to('austenpayan@gmail.com', 'Austen Payan')->subject('Speaker Request');

				});

			} else {

				Mail::send('emails.speaker', array('form' => $form), function($message) {

				    $message->to('admin@onedegreeadvisors.com', 'One Degree Advisors')->subject('Speaker Request');

				});

			}

			

		} catch (Exception $e) {
			
			Log::error($e);

			return Response::json(['message' => 'Something went wront'], 404);

		}

		return Response::json(['message' => 'Email Sent!'], 200);


	}


	public function inquire() {

		try {
			
			$form = Input::all();

			if (App::environment('local')) {

				Mail::send('emails.inquiry', array('form' => $form), function($message) {

				    $message->to('austenpayan@gmail.com', 'Austen Payan')->subject('Inquiry');

				});

			} else {

				Mail::send('emails.inquiry', array('form' => $form), function($message) {

				    $message->to('admin@onedegreeadvisors.com', 'One Degree Advisors')->subject('Inquiry');

				});

			}

		} catch (Exception $e) {
			
			Log::error($e);

			return Response::json(['message' => 'Something went wrong'], 404);

		}

		return Response::json(['message' => 'Email Sent!'], 200);

	}

}