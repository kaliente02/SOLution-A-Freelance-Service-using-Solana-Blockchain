use anchor_lang::prelude::*;

declare_id!("3c88R5gKysP32sr4LAU2UCAdd7t1cq7uqCNtQdkjFpSz");

#[program]
pub mod programs_solution_freelance {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
