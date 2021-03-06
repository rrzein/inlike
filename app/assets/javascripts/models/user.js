Fallinlike.Models.User = Backbone.RelationalModel.extend({
	relations: [{
		type: Backbone.HasMany,
		key: 'photos',
		relatedModel: 'Fallinlike.Models.Photo',
		collectionType: 'Fallinlike.Collections.Photos',
	},
	{
		type: Backbone.HasMany,
		key: "decisions",
		keySource: "decisions",
		relatedModel: "Fallinlike.Models.Decision",
		collectionType: "Fallinlike.Collections.Decisions",
		reverseRelation: {
			key: "judger",
			keySource: "decider_id",
			relatedModel: "Fallinlike.Models.User",
			autoFetch: true
		}
	},
	{
		type: Backbone.HasMany,
		key: "judgements",
		keySource: "judgements",
		relatedModel: "Fallinlike.Models.Decision",
		collectionType: "Fallinlike.Collections.Decisions",
		reverseRelation: {
			key: "judged_user",
			keySource: "decided_id",
			relatedModel: "Fallinlike.Models.User",
			autoFetch: true
		}
	},
	{
		type: Backbone.HasMany,
		key: "sent_messages",
		keySource: "sent_messages",
		relatedModel: "Fallinlike.Models.Message",
		collectionType: "Fallinlike.Collections.Messages",
	},
	{
		type: Backbone.HasMany,
		key: "received_messages",
		keySource: "received_messages",
		relatedModel: "Fallinlike.Models.Message",
		collectionType: "Fallinlike.Collections.Messages",
	},
	{
		type: Backbone.HasMany,
		key: "matches",
		relatedModel: "Fallinlike.Models.Match",
		collectionType: "Fallinlike.Collections.Matches",
		autoFetch: true
	},
	{
		type: Backbone.HasMany,
		key: "admirations",
		relatedModel: "Fallinlike.Models.Match",
		collectionType: "Fallinlike.Collections.Matches",
	}],

	urlRoot: "/users/"
});