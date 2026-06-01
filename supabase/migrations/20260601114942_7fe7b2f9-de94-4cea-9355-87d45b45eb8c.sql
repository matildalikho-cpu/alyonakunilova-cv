DROP POLICY IF EXISTS "anyone can insert likes" ON public.likes;

CREATE POLICY "anyone can insert likes"
ON public.likes
FOR INSERT
TO anon, authenticated
WITH CHECK (
  fingerprint IS NOT NULL
  AND char_length(fingerprint) BETWEEN 8 AND 128
  AND (user_agent IS NULL OR char_length(user_agent) <= 512)
);