import mongoose from 'mongoose'

const SystemSchema = mongoose.Schema(
	{
		status: {
			type: Boolean,
			default: true
		},
		created: {
			type: String,
			default: ''
		},
		updated: {
			type: String,
			default: ''
		}
	},
	{ timestamps: true }
)

const System = mongoose.models.Systems || mongoose.model('Systems', SystemSchema)

export default System
