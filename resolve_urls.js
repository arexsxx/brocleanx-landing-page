const urls = [
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF2LEMeVEz1eo6pV46XqsXXYNz9XOI0pV7umnOPqeN1lMKhzO6DOPzgBKUwMrxD8weRJFyr1ZeOm-yUygO3Wri72vjSQjYUEF6L3L4KhIjnRGHwC2P-XyoB9JFiwCTr6kD9sTE_PTGKI-3lXcLc_F1pjz7RQsY-0lmHB8eryvGP32QYQvDMXnPzGvM=",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH6vAxf2MxlMy0MTX76S2hJITqF9W60AbxxvRuq5G8JWroVryjeTRVJHBHgPZLv1asah_T1xATOi-3MDMrXvM51dL8WdjIv3EtBXmo3VbxukpaI93GrHDmZfzXwjWyVQBUEiKqeTblCGMeg3IxC6mhAzSKs1z0w0ylasA==",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE65FTcHT4I6SHMYeGOKyRsMNp54ExszS0jl5iKJ33U-zRBjYoGJnbr2Jik8yFcGiKGYm83_pAxKtm_5LZ6PdCqD8HpAoPKNk8RZqb0pw870a3JJJ2KwhBUixWs5VD-S1jpIm7S9ckS3a2T7bLH_RhwUoAIUOoOkQ==",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGuIwLzQwjJsVeofEoM3_YIueEGwRmh2HgcVcFZS1qsmPRuG9qfpkUOIjDmbF5kgrubwgPM5ZHSWrbh0hcnUhS0xd-bPf2_eDLPHNYeCHn86vU_zcxbNIqPM31ox3XeKGy9ASXolRPMoA0XBa79--7-isanBlc6iT-EFwaRkR8A_yyuyPfROLlOJFkl",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH2UZ0zfZ6h-1DJj5ehI6U7q1p9CYKuPZX0rskV0K9VzQi9ncF7V1d46qOdOfefVrK0gAsL0bvP1DfpX2DwKNx2pHq77NOAnlACNP4rOaGUA5Q1QzwOfQhhsWIrw6Kh-sD17UGCDD7zeYgLJpQ3i4hUpfmZuwRN5UmDlmHB",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFu2T6m6j-oRGaYJdwOaV5QO43slKj1-nJET9vrkXxzRYaPCTfdhHht_-O5ybnJRjCYWVjq7swdLkgD7Ykk7voETZ3kxzXh_bLc4JFuETfdPvazO2g4W6SGT6iBBYBnbmLWQ6Fmq6F3Fyjdp919-DjzPXwFVVuHBMc1qHTrLiUvqIKE-yA="
];

async function getRealUrls() {
  for (let i = 0; i < urls.length; i++) {
    try {
      const res = await fetch(urls[i]);
      console.log(`URL ${i + 1}: ${res.url}`);
    } catch (e) {
      console.log(`URL ${i + 1} failed:`, e.message);
    }
  }
}

getRealUrls();
