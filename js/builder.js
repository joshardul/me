// Build experiences section
for (let i = 0; i < experiences.length; i++)
{
    // Get current experience
    var experience = experiences[i];
    
    // Create the link for the experience and add it to the list
    var link = experience_link;
    link = link.replace("%id%", experience.id);
    link = link.replace("%link_text%", experience.link_text);
    $("#experience-nav").prepend(link);
    
    // Create the card for the experience and add it to the cards
    var card = experience_card;
    card = card.replace("%id%", experience.id);
    card = card.replace("%name%", experience.name);
    card = card.replace("%location%", experience.location);
    card = card.replace("%start_date%", experience.start_date);
    card = card.replace("%end_date%", experience.end_date);
    card = card.replace("%position%", experience.position);
    // Create the description list
    var description = "";
    for (let j = 0; j < experience.description.length; j++)
    {
        description += "<li>" + experience.description[j] + "</li>"
    }
    card = card.replace("%description%", description);
    $("#experience-cards").prepend(card);
}
    