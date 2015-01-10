<?php

class VideosTableSeeder extends Seeder {


	public function run() {

		Video::create(['link' => '<iframe src="//www.youtube.com/embed/wvLafhB_xBU" frameborder="0" allowfullscreen></iframe>', 'title' => 'Personal Finance Basics', 'description' => 'Watch this person as they break down the basics of personal financing.']);
		Video::create(['link' => '<iframe src="//www.youtube.com/embed/Irsjjeaa73Y" frameborder="0" allowfullscreen></iframe>', 'title' => 'Wisdom Snippets', 'description' => 'You will hear this nowhere else!']);
		Video::create(['link' => '<iframe src="//www.youtube.com/embed/oXRo3_w0f7A" frameborder="0" allowfullscreen></iframe>', 'title' => 'Investing Stretegy', 'description' => 'Take a look at the strategy of the worlds greatest investor.']);
		Video::create(['link' => '<iframe src="//www.youtube.com/embed/pN709oX9Bzk" frameborder="0" allowfullscreen></iframe>', 'title' => 'How to Set Up a Budget', 'description' => 'Bank of America takes us through how to set up a budget.']);
		Video::create(['link' => '<iframe src="//www.youtube.com/embed/Af1zc0qhr8o" frameborder="0" allowfullscreen></iframe>', 'title' => 'A Weird View Of Money', 'description' => 'Listen to this talk by Dave Ramsey.']);
		Video::create(['link' => '<iframe src="//www.youtube.com/embed/TURTyZslzPk" frameborder="0" allowfullscreen></iframe>', 'title' => 'How Wall Street Works', 'description' => 'A Documentary about the ins and outs of Wall Street.']);
		Video::create(['link' => '<iframe src="//www.youtube.com/embed/eQcSqBjC-Ks" frameborder="0" allowfullscreen></iframe>', 'title' => 'Gold Investing', 'description' => 'Crash Course on investing in Gold.']);
		Video::create(['link' => '<iframe src="//www.youtube.com/embed/NRZMmqo4v0Q" frameborder="0" allowfullscreen></iframe>', 'title' => 'What Is A Bond?', 'description' => 'An Economist explains what a bond is.']);



	}


}