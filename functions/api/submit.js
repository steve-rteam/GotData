/**
 * CollectJson - Load Screen Shot as Json
 * Cloudflare Page: https://
 * Cloudflare Worker: qformsinput
 * 2022-12-07 11:21:00
 * 
 * 
 */
var url = 'https://qformsinput.tradedips.workers.dev';
const html = '<!DOCTYPE html><body><h1>Exam submitted</h1><br /><p></p><img src="https://imagedelivery.net/DlZsjGDjyacHKV6POlheIA/856142e5-fa3d-4060-6205-ea97648db000/Mobile" /><br /><p></p><h1>Preliminary results show that you can become a SQL Guru with small continuous improvements</h1><br /><p id="dtime"></p><a href="https://sqlexam.pages.dev/">Request New Exam</a></body><script>const d = new Date(); document.getElementById("dtime").innerHTML=d;</script>';
export async function onRequestPost({ request }) {
	let input = await request.formData();
		var data = {hello: 'world'};
		let tmp, output = {};
		for (let [key, value] of input) {
			tmp = output[key];
			if (tmp === undefined) {
				output[key] = value;
			} else {
				output[key] = [].concat(tmp, value);
			}
		}
	let jsoninput = JSON.stringify(output, null, 2);
	const obj = JSON.parse(jsoninput);
	var fname = obj.fname;
	// GET request using fetch with set headers - X-Custom-Q17X
	const headers = { 'X-Custom-Q17X': 'Q17X' };
	url = url + "?" + "mykey=" + fname + "&mydata=" + jsoninput;
	var response = await fetch(url, { headers });
	data = await response.json();
	let pretty2 = JSON.stringify(data, null, 2);
	let pretty = JSON.stringify(output, null, 2);
	return new Response(html, {
		headers: {
			'content-type': 'text/html;charset=UTF-8',
		},
	});
}