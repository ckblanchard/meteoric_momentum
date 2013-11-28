if (Notes.find().count() === 0) {
  Notes.insert({
    title: "Note No. 1, from fixture.",
    user: "Craig",
    noteBody: "Body copy for note number 1."
  });

  Notes.insert({
    title: "Note No. 2, from fixture.",
    user: "Lisa",
    noteBody: "Body copy for note number 2."
  });

  Notes.insert({
    title: "Note No. 3, from fixture.",
    user: "Paul",
    noteBody: "Body copy for note number 3."
  });
}